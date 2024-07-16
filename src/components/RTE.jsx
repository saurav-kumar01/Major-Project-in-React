import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import { Controller } from 'react-hook-form'



const RTE = ({
    name, control, label, defaultValue=""
}) => {
  return (
   <div w-full>
    {label && <label htmlFor="" className='inline-block mb-1 pl-1'>{label}</label> }
    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolinks",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visulablocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor"
            ],
            toolbar: "undo redo | blocks | image | bold italic | forecolor | alignleft aligncenter bold italic | forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
            content_style: "body {font-family:Helvetice, Arial, sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}          
    />
   </div>
  )
}

export default RTE
