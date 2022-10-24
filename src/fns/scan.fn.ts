// import { readdirSync } from 'fs';


import { readdirSync } from "fs";
import { getSSHConfig } from "./get-ssh-config.fn";
import sshParser from 'ssh-config';

// let dirname = __dirname;

export async function scan(){
    // alert(JSON.stringify(readdirSync))
    alert('hi')
    try{

        // '@chcp 65001 >nul & cmd /d/s/c dir', {encoding: "UTF-8"}, 
        const truc =  fs.readdirSync('.');


        // alert(JSON.stringify(nw.App));
        const win = nw.Window.get(window);
        // win.showDevTools();
        nw.Window.get().showDevTools();

        setTimeout(() => {
            alert(JSON.stringify(window.nw_global.document));
            alert(JSON.stringify((nw.Window.get().window as unknown as Document).getElementById));
        } , 4000)


        // alert(JSON.stringify(win));
        // alert(JSON.stringify((nw.Window.get().window as unknown as Document).getElementById));
        // alert(JSON.stringify(win.title));
        // alert(JSON.stringify((win as any).document));
        // https://subscription.packtpub.com/book/web-development/9781785280863/2/ch02lvl1sec15/the-window-api-working-with-windows-on-nwjs
        // alert(JSON.stringify(win.window.window.location));

        // alert(JSON.stringify(window.document.getElementById))
        // alert(window.path.join('./' , 'truc'));



        // alert(JSON.stringify(readdirSync));

        const res = cp.execSync('@chcp 65001 >nul & cmd /d/s/c dir' , {encoding: 'utf-8'});
        // alert(res.toString().replace(/\r\n/g , '\n'));



        // alert(JSON.stringify(truc))

    } catch (err: any){
        alert(JSON.stringify(err.message))
    }
    // alert(__dirname)
    // const res = readdirSync(__dirname);
    // alert(JSON.stringify(res))
    // should search for .ssh/config
}