const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size =sizes.value;
generateBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(qrText.value.length>0){
            generateQRCode();
        }
        else{
            alert('enter your text to generate QR Code');
        }
        // generateQRCode();
})

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    generateQRCode();
    
})

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img!==null){
        let imgatrr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgatrr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL}`);
    }
})

function isEmpty(){
    // if(qrText.value.length>0){
    //     generateQRCode();
    // }
    // else{
    //     alert('enter your text to generate QR Code');
    // }
        qrText.value.length > 0 ? generateQRCode(): alert('enter your text to generate QR Code');;
}

function generateQRCode(){
    qrContainer.innerHTML=" ";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        // colorLight:'#fff',
        // colorDark:
        colorLight:"#fff",
        colorDark:"#000",
    });
}
