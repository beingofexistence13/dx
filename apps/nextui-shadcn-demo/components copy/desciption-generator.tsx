"use client"

import React, { useState } from "react"
import axios from "axios"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui"

const EDENAI_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzg5MWRmYjgtYjkxZS00YWNlLWFiMmYtNjkxODU0OWRhMGRhIiwidHlwZSI6ImZyb250X2FwaV90b2tlbiJ9.a91i1e26UvOx5e6KsMvmMXC3puUlhui4C3rfHvNaXeI"

const MaterialUIDescription: React.FC = () => {
  const [description, setDescription] = useState("")

  const generateDescription = async () => {
    try {
      const response = await axios.post(
        "https://api.edenai.run/v2/text/generation",
        {
          text: "Material UI is a popular React component library that implements Google's Material Design. 🎨🚀",
          providers: ["openai"],
          length: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${EDENAI_API_KEY}`,
          },
        }
      )
      setDescription(response.data.result[0].output)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <button className={cn(buttonVariants())} onClick={generateDescription}>
        Generate Description
      </button>
      <p>{description}</p>
    </div>
  )
}

export default MaterialUIDescription
