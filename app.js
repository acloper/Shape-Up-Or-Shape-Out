const CONTAINER = 600;

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.div = $(`<div style="left: ${randomValue(width)}px; top: ${randomValue(height)}px"></div>`);
    $("#shapebox").append(this.div);
    this.clickListeners();
  }
  get shapeName() {
    return this.constructor.name;
  }
  clickListeners() {
    this.div.click(() => describe(this));
    this.div.dblclick(() => {
      this.div.remove();
      $(".input-group > input").val("");
    });
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(2 * radius, 2 * radius);
    this.div.addClass("circle");
    this.div.css({ height: this.height + "px", width: this.width + "px" });
  }
  get area() {
    let r = this.width / 2;
    return Math.PI * r * r;
  }
  get perimeter() {
    let r = this.width / 2;
    return 2 * Math.PI * r;
  }
  get radius() {
    return this.width / 2;
  }
}

$("#CircleBtn").click(() => {
  let r = $("#CircleInput").val();
  new Circle(r);
  $("#CircleInput").val("");
});

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);
    this.div.addClass("rectangle");
    this.div.css({ height: this.height + "px", width: this.width + "px" });
  }
  get area() {
    return this.height * this.width;
  }
  get perimeter() {
    return this.height * 2 + this.width * 2;
  }
  get radius() {
    return "N/A";
  }
}

$("#RecBtn").click(() => {
  let height = $("#rect-height").val();
  let width = $("#rect-width").val();
  new Rectangle(height, width);
  $("#rect-height").val("");
  $("#rect-width").val("");
});

class Square extends Rectangle {
  constructor(sideL) {
    super(sideL, sideL);
    this.div.removeClass("rectangle");
    this.div.addClass("square");
  }
}

$("#SquareBtn").click(() => {
  let side = $("#square-input").val();
  new Square(side);
  $("#square-input").val("");
});

class Triangle extends Shape {
  constructor(height) {
    super(height, height);
    this.div.addClass("triangle");
    this.div.css({ "border-bottom-width": this.width + "px", "border-right-width": this.height + "px" });
  }
  get area() {
    return 0.5 * this.height * this.height;
  }
  get perimeter() {
    return 2 * this.height + this.height * Math.sqrt(2);
  }
  get radius() {
    return "N/A";
  }
}

$("#TriBtn").click(() => {
  let height = $("#triangle-input").val();
  new Triangle(height);
  $("#triangle-input").val("");
});

function randomValue(side) {
  return Math.floor(Math.random() * (CONTAINER - side) + 1);
}

function describe(obj) {
  $("#shapename").val(obj.shapeName);
  $("#width").val(obj.width);
  $("#height").val(obj.height);
  $("#radius").val(obj.radius);
  $("#area").val(obj.area);
  $("#perimeter").val(obj.perimeter);
  if (obj.shapeName === "Circle") {
    $("#height").val("N/A");
    $("#width").val("N/A");
  } else {
    $("#height").val(obj.height);
    $("#width").val(obj.width);
  }
}
