const paths = [
    "M0,240 500,240 700,160 1200,160 1400,80 3000,80",
    "M0,240 800,240 925,190 1400,190 1600,110 3000,110",
    "M0,270 1100,270 1225,220 1600,220 1800,140 3000,140",
    "M0,350 600,350 725,400 3000,400",
    "M0,590 350,590 475,640 3000,640",
    "M0,590 350,590 475,640 600,640 800,720 3000,720"
]

const pathsBuildTime = [ 2400, 2700, 2000, 2100, 3000, 2500 ]

const impulseDelays = [ 1800, 2200, 1300, 1500, 2500, 2000 ]

const trailAlpha = [ "ff", "dd", "99", "66", "33" ]
const trailAdditionalDelay = 5

let bg = document.getElementById("bg-animation")
if (paths.length === pathsBuildTime.length && paths.length === impulseDelays.length) {
    for (let i = 0; i < paths.length; i++) {
        let path = document.getElementById("impulse-path-" + i)
        path.setAttribute("d", paths[i])
        path.style.animation = "dash " + pathsBuildTime[i] + "ms linear forwards"

        let impulse = document.getElementById("impulse-" + i)
        impulse.style.offsetPath = 'path("' + paths[i] + '")'
        impulse.style.animationDelay = impulseDelays[i] + "ms"

        for (let j = 0; j < trailAlpha.length; j++) {
            let trail = document.createElement("div")
            trail.classList.add("impulse-trail")
            trail.style.offsetPath = 'path("' + paths[i] + '")'
            trail.style.animationDelay = (impulseDelays[i] + trailAdditionalDelay * (j + 1)) + "ms"
            trail.style.backgroundColor = "#e3ab44" + trailAlpha[j]

            bg.appendChild(trail)
        }
    }
} else {
    console.warn("Circuit effect not drawn due to misconfiguration: length of paths, pathsBuildTime and impulseDelays is not equal.")
}