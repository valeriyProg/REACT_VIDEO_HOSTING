import React from "react";

let defaultStyle = {pointerEvents: 'none', display: 'block', width: '100%', height: '100%'};

export const logo =   <svg viewBox="0 0 70 60" preserveAspectRatio="xMidYMid meet" focusable="false"
                           style={ defaultStyle }>
    <g  preserveAspectRatio="xMidYMid meet">
            <path fill="#FF0000" d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
            c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
            C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
            S64.31,19.77,63,14.87z"/>
            <polygon fill="#FFFFFF" points="26.6,39.43 42.93,30 26.6,20.57"/>
    </g>
</svg>;

export const likeIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" >
    <g><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" className="style-scope yt-icon"/></g></svg>;

export const dislikeIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
    <g><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></g></svg>;

export const addVideoIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={ defaultStyle }>
    <g><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></g></svg>;
