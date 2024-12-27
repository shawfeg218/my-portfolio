import { cn } from "@/lib/utils";
import { Chip, ChipProps } from "@nextui-org/chip";
import Image from "next/image";
import javascriptSvg from "@/public/svg/JavaScript.svg";
import typescriptSvg from "@/public/svg/TypeScript.svg";
import nodejsSvg from "@/public/svg/Node.svg";
import reactSvg from "@/public/svg/Reactjs.svg";
import nextjsSvg from "@/public/svg/Nextjs.svg";
import nextuiSvg from "@/public/svg/NextUI.svg";
import cssSvg from "@/public/svg/CSS.svg";
import tailwindcssSvg from "@/public/svg/TailwindCSS.svg";
import reactquerySvg from "@/public/svg/ReactQuery.svg";
import shadcnuiSvg from "@/public/svg/ShadcnUI.svg";
import openaiSvg from "@/public/svg/OpenAi.svg";
import azureSvg from "@/public/svg/Azure.svg";
import firebaseSvg from "@/public/svg/Firebase.svg";
import arduinoSvg from "@/public/svg/Arduino.svg";
import mqttSvg from "@/public/svg/Mqtt.svg";
import awsSvg from "@/public/svg/AWS.svg";
import socketioSvg from "@/public/svg/SocketIO.svg";
import ffmpegSvg from "@/public/svg/Ffmpeg.svg";
import OracleSvg from "@/public/svg/Oracle.svg";
import AnalysisSvg from "@/public/svg/Analysis.svg";
import { Tool } from "../constants/projectData";

export interface StackChipProps extends ChipProps {
  tool: Tool;
}

export default function StackChip({ tool, children, className, ...props }: StackChipProps) {
  return (
    <Chip
      // variant="flat"
      // color="primary"
      variant="solid"
      color="default"
      className={cn("rounded-lg pl-2 pr-1", className)}
      {...props}
      startContent={
        <div
          className={`relative overflow-hidden ${
            props.size === "sm"
              ? "size-[13px]"
              : props.size === "md"
              ? "size-4"
              : props.size === "lg"
              ? "size-6"
              : "size-4"
          }`}
        >
          <Image
            src={
              tool === "JavaScript"
                ? javascriptSvg
                : tool === "TypeScript"
                ? typescriptSvg
                : tool === "Node.js"
                ? nodejsSvg
                : tool === "React"
                ? reactSvg
                : tool === "Next.js"
                ? nextjsSvg
                : tool === "NextUI"
                ? nextuiSvg
                : tool === "CSS"
                ? cssSvg
                : tool === "Tailwind CSS"
                ? tailwindcssSvg
                : tool === "React Query"
                ? reactquerySvg
                : tool === "ShadcnUI"
                ? shadcnuiSvg
                : tool === "OpenAI"
                ? openaiSvg
                : tool === "Azure"
                ? azureSvg
                : tool === "Firebase"
                ? firebaseSvg
                : tool === "Arduino"
                ? arduinoSvg
                : tool === "Mqtt"
                ? mqttSvg
                : tool === "AWS"
                ? awsSvg
                : tool === "Socket.io"
                ? socketioSvg
                : tool === "FFmpeg"
                ? ffmpegSvg
                : tool === "Oracle EBS"
                ? OracleSvg
                : tool === "Oracle APEX"
                ? OracleSvg
                : tool === "ERP"
                ? AnalysisSvg
                : javascriptSvg
            }
            alt="stack svg"
            sizes="16px"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      }
    >
      {children}
    </Chip>
  );
}
