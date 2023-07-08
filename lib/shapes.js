class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  setColor(colour) {
    this.colour = colour;
  }

  setTextColour(colour) {
    this.textColour = colour;
  }
}

class Triangle extends Shape {
  constructor(height, width) {
    super(height, width);
  }

  render(text, textColour) {
    return `<svg width="${this.width}" height="${this.height}"><polygon points="150, 18 244, 182 56, 182 " fill="${this.colour}" /><text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(height, width) {
    super(height, width);
  }

  render(text, textColour) {
    return `<svg width="${this.width}" height="${this.height}"><rect width="${this.width}" height="${this.height}" fill="${this.colour}" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
  }
}

class Circle extends Shape {
  constructor(height, width) {
    super(height, width);
  }

  render(text, textColour) {
    return `<svg width="${this.width}" height="${this.height}"><circle cx="${
      this.width / 2
    }" cy="${this.height / 2}" r="80" fill="${
      this.colour
    }" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
  }
}

module.exports = { Triangle, Square, Circle };
