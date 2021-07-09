  
Webcam.set({
    width:350,
    height:300,
  dest_width: 400,
    dest_height: 300,
      image_format : 'png',
    png_quality:90
  });
document.getElementById("webcam");
Webcam.attach("#webcam");
function take_picture(){
    document.getElementById("final_pic").innerHTML = "<label>Sample</label><div id='result'></div><br><br><button id='check' onclick='check()' class='btn btn-info'>Check</button>"
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
    
    }
    console.log("ml5 version: ", ml5.version);
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/wfEkRI7Pw/model.json', modelLoaded);
    function modelLoaded(){
        console.log("Model Loaded!");
    }
    function speak(){
        var synth = window.speechSynthesis;
        var speakdata1 = "The First Prediction Is" + prediction_1;
        var speakdata2 = "The Second Prediciton Is" + prediciton_2;
        var utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
        synth.speak(utterthis);
    }
