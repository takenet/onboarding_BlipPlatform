/*** Architecture: Bot Router + Main Bot + Subbots (optional) ***/

/* [ ! ] Attention¹: This script identifies each channel (eg Blip Chat, WhatsApp, Messenger, Telegram, etc.) 
the user / client is talking to his Smart Contact (Chatbot). For more information, read the documentation 
suggested in the comments of this script below. /*

/* [ ! ] Attention²: To configure this script, the following steps are required:
(0) disable the "Use Router Context" functionality,
(1) add an "Execute script" action,
(2) add the "tunnel.originator" system variable as a input,
(3) add the code in "Script" and
(4) save the processing / return in the "channel" variable (or equivalent) */

/* [ ! ] API Reference: https://docs.blip.ai/#channels */

function run(tunnelOriginator) {
    contactDomain = tunnelOriginator.split("@")[1];
    let channel;
    switch (contactDomain) {
        case 'wa.gw.msging.net':
            channel = "Whatsapp";
        case '0mn.io':
            channel = "Blip Chat";
        case 'messenger.gw.msging.net':
            channel = "Messenger";
        case 'businessmessages.gw.msging.net':
            channel = "GBM";
        case 'skype.gw.msging.net':
            channel = "Skype";
        case 'telegram.gw.msging.net':
            channel = "Telegram";
        case 'workplace.gw.msging.net':
            channel = 'Workplace';
        case 'mailgun.gw.msging.net':
            channel = "Email";
        case 'take.io':
            channel = "SMS";         
        default:
            channel = "Other";
    }
    return channel;
}
