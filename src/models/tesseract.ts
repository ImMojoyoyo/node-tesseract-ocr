import * as tesseract from 'node-tesseract-ocr';
import * as fs from 'fs';

const config = {
    lang : 'spa',
    oem : 1,
    psm : 3
}

export class Ocr {


    constructor(){

        this.tesseract();
    }

    async tesseract(){

        const img = await fs.readFileSync('');
        await tesseract
            .recognize(img, config)
            .then( (text) =>{
                console.log( "Result: ", text);
            })
            .catch( (error) => {
                console.log( error.message );
            });
    
    }


    async console(){
        await console.log("Sergi");
    }

}





