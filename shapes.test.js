const {Triangle} = require("./shapes");

describe("Triangle", () => {
    test("renders a triangle with the correct information", () => {
        const testSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="Blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="Green">EWS</text> </svg>'
        const svg = new Triangle ("Blue","EWS","Green")
         expect(testSvg).toEqual(svg.render())
    })
    })

const {Circle} = require("./shapes")

describe("Circle", () => {
    test("renders a circle with the correct information", () => {
        const testSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="Blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Green">EWS</text></svg>'
        const svg = new Circle ("Blue","EWS","Green")
        expect(testSvg).toEqual(svg.render())
    })
    })

const {Square} = require("./shapes")

describe("Square", () => {
    test("renders a square with the correct information", () => {
        const testSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x=\"90\" y=\"40\" width=\"120\" height=\"120" fill="Blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Green">EWS</text></svg>'
        const svg = new Square ("Blue","EWS","Green")
        expect(testSvg).toEqual(svg.render())
    })
    })