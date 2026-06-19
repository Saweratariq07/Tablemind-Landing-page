"""Download correctly matched Ghanaian dish photos for POS preview."""
from __future__ import annotations

import hashlib
import time
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "dishes"
OUT.mkdir(parents=True, exist_ok=True)

# Wikimedia Commons filenames (freely licensed, CC-BY-SA)
DISHES = {
    "jollof.jpg": "Ghanaian Jollof Rice.jpg",
    "tilapia.jpg": "Grilled Tilapia Ghana.JPG",
    "waakye.jpg": "Ghanaian Wache (Waakye) cuisine food.jpg",
    "kelewele.jpg": "Kelewele.jpg",
    "soup.jpg": "Omo tuo with groundnut soup and meat.jpg",
    "sobolo.jpg": "Zobo drink.jpg",
}

USER_AGENT = "TableMindLanding/1.0 (https://tablemind.co; hello@tablemind.co)"
MAX_WIDTH = 480
JPEG_QUALITY = 82


def commons_file_url(filename: str) -> str:
    name = filename.replace(" ", "_")
    digest = hashlib.md5(name.encode("utf-8")).hexdigest()
    encoded = urllib.parse.quote(name)
    return f"https://upload.wikimedia.org/wikipedia/commons/{digest[0]}/{digest[0:2]}/{encoded}"


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=120) as res:
        dest.write_bytes(res.read())


def optimize(path: Path) -> None:
    with Image.open(path) as img:
        img = img.convert("RGB")
        if img.width > MAX_WIDTH:
            height = round(img.height * (MAX_WIDTH / img.width))
            img = img.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
        img.save(path, "JPEG", quality=JPEG_QUALITY, optimize=True)


def main() -> None:
    for dest_name, wiki_name in DISHES.items():
        dest = OUT / dest_name
        url = commons_file_url(wiki_name)
        print(f"Downloading {dest_name} <- {wiki_name}")
        try:
            download(url, dest)
            optimize(dest)
            print(f"  OK ({dest.stat().st_size} bytes)")
        except Exception as err:
            print(f"  FAIL: {err}")
        time.sleep(2)


if __name__ == "__main__":
    main()
