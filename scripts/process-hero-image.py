"""Remove checkerboard/gray background and export transparent hero PNG."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC_CANDIDATES = [
    ROOT / "assets" / "hero-devices-hires.png",
    Path(r"C:\Users\Waleed Abbasi\.cursor\projects\d-Web-Dev-Tekzora-Tablemind-landing\assets\hero-devices-hires.png"),
]
OUT = ROOT / "public" / "hero-devices.png"
TARGET_WIDTH = 2048


def is_background(r: int, g: int, b: int) -> bool:
    """Detect checkerboard grays and near-white backdrop pixels."""
    if r > 210 and g > 210 and b > 210 and abs(r - g) < 12 and abs(g - b) < 12:
        return True
    return False


def flood_transparent(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    w, h = rgba.size
    pixels = rgba.load()
    visited = set()
    queue = []

    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        r, g, b, a = pixels[x, y]
        if not is_background(r, g, b):
            continue
        pixels[x, y] = (r, g, b, 0)
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                queue.append((nx, ny))

    return rgba


def trim_transparent(img: Image.Image, pad: int = 24) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(img.width, right + pad)
    bottom = min(img.height, bottom + pad)
    return img.crop((left, top, right, bottom))


def upscale(img: Image.Image, target_width: int) -> Image.Image:
    if img.width >= target_width:
        return img
    ratio = target_width / img.width
    target_height = round(img.height * ratio)
    return img.resize((target_width, target_height), Image.Resampling.LANCZOS)


def main() -> None:
    src = next((p for p in SRC_CANDIDATES if p.exists()), None)
    if src is None:
        raise FileNotFoundError("Source image not found in assets paths")

    img = Image.open(src)
    processed = flood_transparent(img)
    processed = trim_transparent(processed)
    processed = upscale(processed, TARGET_WIDTH)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    processed.save(OUT, format="PNG", optimize=True)
    print(f"Saved {OUT} ({processed.width}x{processed.height}, mode=RGBA)")


if __name__ == "__main__":
    main()
