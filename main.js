prediction_1 = "Hehehe";


Webcam.set({
width: 350,
height:300,
image_format: "png",
png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_uri + "'>";
    });
    
}

console.log("ml5 Version", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/647hZDYqC/model.json"),modelLoaded;

function modelLoaded(){
    console.log("Model has loaded Yayyyyyyy");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1 = "The First Prediction is " + prediction_1 ;
    console.log(speak_data_1);
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);

}
function check() 
{ 
    img = document.getElementById('captured_image');
     classifier.classify(img, TheResult); 

 }

function TheResult(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        prediction_1 = results[0].label;
        speak();

        if(prediction_1 == "clap"){
            document.getElementById("update_gesture").innerHTML= "&#128079";
        }
        if(prediction_1 == "cool"){
            document.getElementById("update_gesture").innerHTML= "&#129304";
        }
        if(prediction_1 == "Peace"){
            document.getElementById("update_gesture").innerHTML= "&#9996";
        }
        if(prediction_1 == "Amazing"){
            document.getElementById("update_gesture").innerHTML= "&#128076";
        }
        if(prediction_1 == "Thumbs up"){
            document.getElementById("update_gesture").innerHTML= "&#128077";
        }

    }
}