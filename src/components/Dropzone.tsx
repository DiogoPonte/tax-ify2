import React, { useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import { DropzoneAreaBase, FileObject } from 'react-mui-dropzone';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { createTheme, ThemeProvider } from '@mui/material';


interface Props {
    zoneHeight: number,
    handleFiles: (arg0: FileObject[]) => void;
}

const Dropzone = ({ zoneHeight, handleFiles }: Props) => {
    

    const handleAlert = (message: any, variant: any) => {
        //console.log(`${variant}: ${message}`)
    }
    /***
     * 
     * TODO REFACTOR ZONEHEIGHT INTO ENUM/BETTER LOGIC
     */

    return (
        <Container sx={{
            pt: 4, pb: 3,
            width: "100%",
            '& .MuiDropzoneArea-textContainer': {
                color: 'black'
            },
            '& .MuiDropzoneArea-text': {
                paddingTop: zoneHeight > 200 ? 8 : 4,
                fontSize: 20,
            },
            '& .MuiDropzoneArea-root': {
                height: zoneHeight,
            },
        }}>
            <DropzoneAreaBase
                acceptedFiles={['text/x-csv', 'text/plain', 'application/vnd.ms-excel', 'application/x-csv', 'application/csv', 'text/csv', 'text/comma-separated-values', 'text/x-comma-separated-values', 'text/tab-separated-values']}
                onAdd={handleFiles}
                onAlert={handleAlert}
                Icon={UploadFileIcon as any}
                dropzoneText={zoneHeight > 200 ? "Largue um ficheiro CSV aqui" : "Largue mais ficheiros CSV aqui"}
                fileObjects={[]}
            />
        </Container>
    );
}

export { Dropzone }