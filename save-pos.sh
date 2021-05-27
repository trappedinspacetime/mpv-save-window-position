#!/bin/bash
# awk liner help from Ed Morton https://unix.stackexchange.com/questions/650946/format-output-of-xdotool-window-geometry/651084#651084
awk -v RS= -F'[[:space:]:,x]+' '{printf "%d %d %d %d\n", $4, $5, $9, $10}' <<<$(xdotool search --sync --class mpv getwindowgeometry) > ~/.config/mpv/scripts/last_window_coords.txt
