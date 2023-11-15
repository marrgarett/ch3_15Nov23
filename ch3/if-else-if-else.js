const prompt = require('prompt-sync') ()
let size = parseFloat(prompt ('ขนาดของไฟล์ (ไบต์) >> '))
var unit
if (size >= 1099511627776) {        // ขนาด 1,099,511,627,776 ขึ้นไป ให้แปลงเป็นหน่วย TB
    size /= 1099511627776
    unit = "TB"
} else if (size >= 1073741824) {    // ขนาด 1,073,741,824 ขึ้นไป ให้แปลงเป็นหน่วย GB
    size /= 1073741824
    unit = "GB"
} else if (size >= 1048576) {       // ขนาด 1,048,576 ขึ้นไป ให้แปลงเป็นหน่วย MB
    size /= 1048576
    unit = "MB"
} else if (size >= 1024) {          // ขนาด 1,024 ขึ้นไป ให้แปลงเป็นหน่วย KB
    size /= 1024
    unit = "KB"
} else {                            // ขนาดน้อยกว่า 1,024 ให้ใช้หน่วย Byte
    unit = "Byte"
}
console.log(`ขนาดของไฟล์ที่เหมาะสมคือ : )
    ${size.toFixed(2)} ${unit} `)