#!/usr/bin/env bash
# Cut a short, silent, web-sized loop from a longer video (e.g. the VSL) for
# the top of the studio page.
#   scripts/make-hero-loop.sh <video file> <start, e.g. 00:00:12> [seconds, default 8]
# Writes public/video/hero-loop.mp4 and public/video/hero-loop.webm (no sound,
# 720px tall, a few MB), then set "heroLoop" in content/videos.json.
set -euo pipefail
in="${1:?video file}"; start="${2:?start time}"; len="${3:-8}"
mkdir -p public/video
ffmpeg -y -loglevel error -ss "$start" -t "$len" -i "$in" -an \
  -vf "scale=-2:720,fps=30" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 26 -preset slow -movflags +faststart \
  public/video/hero-loop.mp4
ffmpeg -y -loglevel error -ss "$start" -t "$len" -i "$in" -an \
  -vf "scale=-2:720,fps=30" -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 \
  public/video/hero-loop.webm
ls -lh public/video/hero-loop.*
