let songindex = 0;
let mysong = new Audio('songs/1.mp3');
let playbutton = document.getElementById('playbutton');
let progressbar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let bottomsongPlay = document.getElementById('bottomsongPlay');

// document.getElementById('progressBar').style.backgroundColor = "#666666"

// To change previous pause to play button
const makeallplays = () => {
    Array.from(document.getElementsByClassName('eachsongPlay')).forEach((Element) => {
    Element.classList.remove('fa-circle-pause');
    Element.classList.add('fa-circle-play');
});
};

let songs = [
    {song: "Film Out - BTS" , filepath: "songs/Film Out - BTS.mp3" , coverpath: "covers/film out.jpg"},
    {song: "Night Changes - One Direction" , filepath: "songs/Night Changes - One Direction.mp3" , coverpath: "covers/night changes.jpg"},
    {song: "Sun Maahi - Armaan Malik" , filepath: "songs/Sun Maahi - Armaan Malik.mp3" , coverpath: "covers/sunmaahi.jpg"},
    {song: "Sun Maahi - English Version" , filepath: "songs/Sun Maahi - English Version.mp3" , coverpath: "covers/sunmaahi.jpg"},
    {song: "Darkhaast - Arijit Singh" , filepath: "songs/Darkhaast - Arijit Singh.mp3" , coverpath: "covers/darkhaast.jpeg"},
    {song: "Older - Sasha Alex Sloan" , filepath: "songs/Older - Sasha Alex Sloan.mp3" , coverpath: "covers/older.jpg"},
    {song: "Khoya Hain" , filepath: "songs/Khoya Hain.mp3" , coverpath: "covers/khoya hain.jpeg"},
    {song: "Illegal Weapon 2.0" , filepath: "songs/Illegal Weapon 2.0.mp3" , coverpath: "covers/illegal.jpeg"},
    {song: "Snap - Rose Linn" , filepath: "songs/Snap - Rose Linn.mp3" , coverpath: "covers/snap.jpeg"},
    {song: "Your Eyes x Teri Nazron Ne" , filepath: "songs/Yours Eyes X Teri Nazron Ne.mp3" , coverpath: "covers/your eyes.jpg"}
]


//Setting coverimage and songname using Js on the page:
songitems.forEach((Element, i) => {
    // console.log(Element,i);
    Element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    Element.getElementsByClassName('songname')[0].innerHTML = songs[i].song;
})

//Play Pause Work:-
playbutton.addEventListener('click' , () => {
    if(mysong.paused || mysong.currentTime<=0) //currentTime gets or sets the current playback position in seconds
    {
        makeallplays();
        mysong.play();
        gif.style.opacity=1;
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
        document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
    }

    else if(mysong.play)
    {
        mysong.pause();
        gif.style.opacity=0;
        playbutton.classList.remove('fa-circle-pause');
        playbutton.classList.add('fa-circle-play');
        document.getElementById(`${songindex}`).classList.remove('fa-circle-pause');
        document.getElementById(`${songindex}`).classList.add('fa-circle-play');
    }
});

//Progress Bar going with song currenttime event Listener
mysong.addEventListener('timeupdate' , () => { //timeupdate is changing time event listener
    console.log("This is songs timeupdate event bar");
    let progress = parseInt((mysong.currentTime/mysong.duration)*100); //parse int change string into integer
    console.log(progress);
    progressbar.value = progress;
});

progressbar.addEventListener('change' , () => {
    let value = progressbar.value;
    mysong.currentTime = (value*mysong.duration)/100; //value is in percent and song time is in seconds(integers) . 
});


Array.from(document.getElementsByClassName('eachsongPlay')).forEach((Element) => {
    Element.addEventListener('click' , (e) => {
        makeallplays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        songindex = parseInt(e.target.id);
        mysong.src = `songs/${songindex}.mp3`;
        mysong.currentTime = 0;
        mysong.play();
        bottomsongPlay.innerText = songs[songindex-1].song;
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
    });
});

document.getElementById('next').addEventListener('click', () => {
    makeallplays();
    if(songindex>=10)
    {
        songindex = 1;
    }

    else
    {
        songindex += 1;
    }

    mysong.src = `songs/${songindex}.mp3`;
    mysong.currentTime = 0;
    mysong.play();
    document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
    bottomsongPlay.innerText = songs[songindex-1].song;
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
    makeallplays();
    if(songindex<=1)
    {
        songindex = 1;
    }

    else
    {
        songindex -= 1;
    }

    mysong.src = `songs/${songindex}.mp3`;
    mysong.currentTime = 0;
    mysong.play();
    document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
    bottomsongPlay.innerText = songs[songindex-1].song;
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
});