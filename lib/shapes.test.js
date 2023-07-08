const { Triangle, Square, Circle } = require("./shapes");

describe("Triangle", () => {
  describe("render", () => {
    it("returns a triangle SVG", () => {
      const triangle = new Triangle(200, 300);
      triangle.setColor("red");
      const svg = triangle.render("ABC", "blue");
      expect(svg).toEqual(
        '<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182 " fill="red" /><text x="150" y="140" font-size="60" text-anchor="middle" fill="blue">ABC</text></svg>'
      );
    });
  });
});

describe("Square", () => {
  describe("render", () => {
    it("returns a square SVG", () => {
      const square = new Square(200, 300);
      square.setColor("red");
      const svg = square.render("ABC", "blue");
      expect(svg).toEqual(
        '<svg width="300" height="200"><rect width="300" height="200" fill="red" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">ABC</text></svg>'
      );
    });
  });
});

describe("Circle", () => {
  describe("render", () => {
    it("returns a circle SVG", () => {
      const circle = new Circle(200, 300);
      circle.setColor("red");
      const svg = circle.render("ABC", "blue");
      expect(svg).toEqual(
        '<svg width="300" height="200"><circle cx="150" cy="100" r="150" fill="red" /><text x="95" y="160" font-size="60" text-anchor="middle" fill="blue">ABC</text></svg>'
      );
    });
  });
});
