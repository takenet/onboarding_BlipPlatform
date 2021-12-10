/* # Technical Note # 
script developed to implement and verify the hours (doble period) of operation of human service in chatbot developed on 
the Take Blip platform
*/

/* # Prerequisites #
no prerequisites required
/*
/* # How to implement #
1. configure on the Blip platform, in the content block, an Action called "Execute a script"
2. no input variables
3. copy and place the code below in "Script"
4. save return in output variable "workSchedule"
5. for days when service is not available, delete the corresponding part of the code. 
When deleting, ensure that the default of the configured JSON object has remained
*/

function run() {
    let workSchedule = [
        {
            "num": 0,
            "name": "Sunday",
            "portugueseName": "Domingo",    //optional line
            "workTime": [
            {
                "start": "08:00",
                "end": "12:00"
            },
            {
                "start": "13:00",
                "end": "19:00"
            }
            ]
        },
        {
            "num": 1,
            "name": "Monday",
            "portugueseName": "Segunda-feira",  //optional line
            "workTime": [
            {
                "start": "8:00",
                "end": "12:00"
            },
            {
                "start": "13:00",
                "end": "22:00"
            }
            ]
        },
        {
            "num": 2,
            "name": "Tuesday",
            "portugueseName": "Terça-feira",    //optional line
            "workTime": [
            {
                "start": "8:00",
                "end": "12:00"
            },
            {
                "start": "13:00",
                "end": "22:00"
            }
            ]
        },
        {
            "num": 3,
            "name": "Wednesday",
            "portugueseName": "Quarta-feira",   //optional line
            "workTime": [
            {
                "start": "8:00",
                "end": "12:00"
            },
            {
                "start": "13:00",
                "end": "22:00"
            }
            ]
        },
        {
            "num": 4,
            "name": "Thursday",
            "portugueseName": "Quinta-feira",   //optional line
            "workTime": [
            {
                "start": "8:00",
                "end": "12:00"
            },
            {
                "start": "13:00",
                "end": "22:00"
            }
            ]
        },
        {
            "num": 5,
            "name": "Friday",
            "portugueseName": "Sexta-feira",    //optional line
            "workTime": [
            {
                "start": "8:00",
                "end": "12:00"
            },
            {
                "start": "13:00",
                "end": "22:00"
            }
            ]
        },
        {
            "num": 6,
            "name": "Saturday",
            "portugueseName": "Sábado", //optional line
            "workTime": [
            {
                "start": "8:00",
                "end": "12:00"
            },
            {
                "start": "13:00",
                "end": "22:00"
            }
            ]
        },
    ];
    return JSON.stringify(workSchedule); //Return value will be saved as "Return value variable" field name
}
