"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tesseract = __importStar(require("node-tesseract-ocr"));
const fs = __importStar(require("fs"));
const config = {
    lang: 'spa',
    oem: 1,
    psm: 3
};
class Ocr {
    constructor() {
        this.tesseract();
    }
    tesseract() {
        return __awaiter(this, void 0, void 0, function* () {
            const img = yield fs.readFileSync('');
            yield tesseract
                .recognize(img, config)
                .then((text) => {
                console.log("Result: ", text);
            })
                .catch((error) => {
                console.log(error.message);
            });
        });
    }
    console() {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log("Sergi");
        });
    }
}
exports.Ocr = Ocr;
