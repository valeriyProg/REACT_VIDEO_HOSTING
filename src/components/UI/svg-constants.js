import React from "react";

let defaultStyle = {pointerEvents: 'none', display: 'block'};

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

export const sortIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                             className="style-scope yt-icon"
                             style={defaultStyle}>
    <g className="style-scope yt-icon">
        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" className="style-scope yt-icon"/>
        <path d="M0 0h24v24H0z" fill="none" className="style-scope yt-icon"/>
    </g>
</svg>;

export const homeIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={defaultStyle}>
    <g>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"/>
    </g>
</svg> ;

export const subsIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                             style={defaultStyle}>
    <g >
        <path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
            className="style-scope yt-icon"/>
    </g>
</svg>;

    export const historyIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={ defaultStyle }>
        <g ><path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"/></g>
    </svg>;

    export const laterIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={defaultStyle}>
        <g ><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"/></g>
    </svg> ;
