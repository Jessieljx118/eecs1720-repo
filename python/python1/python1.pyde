def setup():
    size(480, 120)

def draw():
    if  mousePressed:
        fill(0,255,255)
    else:
        fill(0,240,127)
    rect(mouseX, mouseY, 100, 60)
