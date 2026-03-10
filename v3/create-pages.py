#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для создания страниц Plato-Intel v3
"""

from pathlib import Path

BASE_DIR = Path(r"f:\Work\platointel\v3\app\(main)")
BASE_DIR.mkdir(parents=True, exist_ok=True)

# Создаем директории
for d in ['catalog', 'about', 'contacts', 'expert', 'lab', 'selection']:
    (BASE_DIR / d).mkdir(parents=True, exist_ok=True)
    print(f"Директория: {d}")

print("\nСоздание файлов...")
