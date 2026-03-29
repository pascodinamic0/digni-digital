#!/usr/bin/env python3
"""Extract text from the StoryBrand PDF in docs/ for local analysis. Requires: pip install pypdf"""

from pathlib import Path

try:
    from pypdf import PdfReader
except ImportError as e:
    raise SystemExit("Install pypdf: python3 -m pip install pypdf") from e

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "docs" / "Building a StoryBrand 2_0_ Clarify Your Message So Customers -- Donald Miller.pdf"


def main() -> None:
    if not PDF.is_file():
        raise SystemExit(f"PDF not found: {PDF}")
    reader = PdfReader(str(PDF))
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        print(f"\n--- Page {i + 1} ---\n")
        print(text)


if __name__ == "__main__":
    main()
