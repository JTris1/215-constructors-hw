let colors = ["red", "green", "blue"];
let elements = [];

function divCreator(color) {
    let that = this;
    this.num = 0;

    // STYLING
    this.div = document.createElement("div");
    this.div.style.backgroundColor = color;
    this.div.style.width = "200px";
    this.div.style.height = "100px";
    this.div.style.borderRadius = "10px";
    this.div.style.fontSize = "18px";
    this.div.style.color = "white";
    this.div.style.display = "flex";
    this.div.style.justifyContent = "center";
    this.div.style.alignItems = "center";

    this.div.addEventListener("click", function() {
        that.addClick(1);
    })

    this.div.innerHTML = this.num;
    document.body.append(this.div);
}

divCreator.prototype.addClick = function(clickNum) {
    this.num += clickNum;
    this.div.innerHTML = this.num;
}

for(let i in colors) {
    elements.push(new divCreator(colors[i]));
}