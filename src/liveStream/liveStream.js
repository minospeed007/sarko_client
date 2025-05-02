// App.js
import React, { useRef, useState } from 'react';
import io from 'socket.io-client';
import './liveStream.css'

const socket = io('https://styyze-server.onrender.com'); 

const LiveStream = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const [peerConnection] = useState(new RTCPeerConnection());

    // Start the local video stream
    const startStream = async () => {
        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = localStream;

        localStream.getTracks().forEach(track => {
            peerConnection.addTrack(track, localStream);
        });

        peerConnection.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0];
        };

        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit('ice-candidate', event.candidate);
            }
        };
    };

    // Handle connection signals
    socket.on('offer', async (offer) => {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.emit('answer', answer);
    });

    socket.on('answer', async (answer) => {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on('ice-candidate', async (candidate) => {
        try {
            await peerConnection.addIceCandidate(candidate);
        } catch (error) {
            console.error('Error adding ICE candidate:', error);
        }
    });

    const createOffer = async () => {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        socket.emit('offer', offer);
    };

    return (
        <div className='live-div'>
            <h1>WebRTC Live Streaming</h1>
            <video ref={localVideoRef} autoPlay muted style={{ width: '400px' }} />
            <video ref={remoteVideoRef} autoPlay style={{ width: '400px' }} />
            <div className='btn-div'>
            <button  className='live-btn' onClick={startStream}>Start Stream</button>
            <button  className='live-btn2' onClick={createOffer}>Connect</button>
            </div>
        </div>
    );
};

export default LiveStream;
