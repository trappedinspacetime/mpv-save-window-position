// Sometime the leftmost screen doesn't have id 0
// not sure yet how to detect this automatically
var leftMostScreen = 1

// Some setup used by both reading and writing
var dir = mp.utils.split_path(mp.get_script_file())[0]
var rect_path = mp.utils.join_path(dir, "last_window_coords.txt")

// I modified and ported it to Linux from https://github.com/TheOddler/mpv-config/blob/master/scripts/remember_last_window_rect.js

// Read last window rect if present
try {
    var rect = mp.utils.read_file(rect_path).trim().split(' ')

    var x = rect[0]
    var y = rect[1]
    var width = rect[2]
    var height = rect[3]
    mp.set_property("screen", leftMostScreen)
    var geometry = width + "x" + height + "+" + x + "+" + y
    dump("Set geometry: " + geometry)
    mp.set_property("geometry", geometry)
}
catch (e) {
    dump(e)
}

// Save the rect at shutdown
function on_exit() {

    var winpossave = mp.command_native({
        name: "subprocess",
        playback_only: false,
        capture_stdout: true,
        args : ["save-pos"]
    });



}


mp.register_event("shutdown", on_exit);

