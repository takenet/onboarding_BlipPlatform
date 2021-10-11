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

function run(contactIdentity) { 
    var channel;
    
    contactDomain = contactIdentity.split("@")[1];

    switch (contactDomain) {      
        case '0mn.io':
            channel = "Blip Chat";
            return channel;

        case 'tangram.com.br':
            channel = "SMS";
            return channel;

         case 'take.io':
            channel = "SMS";
            return channel;

        case 'messenger.gw.msging.net':
            channel = "Messenger";
            return channel;
        
        case 'instagram.gw.msging.net':
            channel = "Instagram";
            return channel;

        case 'wa.gw.msging.net':
            channel = "WhatsApp";
            return channel;

        case 'abs.gw.msging.net':
            channel = "Microsoft Teams";
            return channel;

        case 'businessmessages.gw.msging.net':
            channel = "GBM";
            return channel;

        case 'skype.gw.msging.net':
            channel = "Skype";
            return channel;

        case 'telegram.gw.msging.net':
            channel = "Telegram";
            return channel;

        case 'workplace.gw.msging.net':
            channel = 'Workplace';
            return channel;

        case 'mailgun.gw.msging.net':
            channel = "Email";
            return channel;   

        default:
            channel = "Other";
            return channel;
    }
}
