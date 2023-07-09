// import
import init, {do_print_qr} from '../../pkg/matter_qrcode_generator_wasm.js'
import '../css/style.css'

// function
export function print_qr() {
    init().then(() => {
        // TODO: validate
        const vid = parseInt(document.getElementById('vid').value)
        const pid = parseInt(document.getElementById('pid').value)
        const passcode = parseInt(document.getElementById('passcode').value)
        const discriminator = parseInt(document.getElementById('discriminator').value)

        var qr
        try {
            qr = do_print_qr(vid, pid, passcode, discriminator) // TODO: qr-code size
        } catch(e) {
            alert(e)
            return
        }

        if (qr == null) {
            return
        }

        document.getElementById('qr').innerHTML = qr
    })
}

// init
document.getElementById('print').onclick = print_qr