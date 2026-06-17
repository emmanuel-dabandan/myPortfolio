"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaFileDownload, FaTachometerAlt, FaKeyboard } from "react-icons/fa";

const RESUME_PDF_PATH = "/Resume (5).pdf";
const MAX_PDF_WIDTH = 950;

const Resume = () => {
    const pagesContainerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        let cancelled = false;
        let loadingTask;

        const renderPdf = async () => {
            try {
                setIsLoading(true);
                setHasError(false);
                setErrorMessage("");

                const pdfjs = await import("pdfjs-dist/webpack.mjs");

                loadingTask = pdfjs.getDocument({
                    url: RESUME_PDF_PATH,
                    useSystemFonts: true,
                });

                const pdf = await loadingTask.promise;
                if (cancelled || !pagesContainerRef.current) return;

                const container = pagesContainerRef.current;
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }

                const targetWidth = Math.min(container.clientWidth || MAX_PDF_WIDTH, MAX_PDF_WIDTH);
                const dpr = window.devicePixelRatio || 1;

                for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
                    const page = await pdf.getPage(pageNumber);
                    if (cancelled) return;

                    const baseViewport = page.getViewport({ scale: 1 });
                    const scale = targetWidth / baseViewport.width;
                    const viewport = page.getViewport({ scale });

                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d", { alpha: false });
                    if (!context) continue;

                    canvas.width = Math.floor(viewport.width * dpr);
                    canvas.height = Math.floor(viewport.height * dpr);
                    canvas.style.width = `${Math.floor(viewport.width)}px`;
                    canvas.style.height = `${Math.floor(viewport.height)}px`;
                    canvas.className = "mx-auto block bg-white rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.18)]";
                    canvas.setAttribute("aria-label", `Resume page ${pageNumber}`);

                    context.setTransform(dpr, 0, 0, dpr, 0, 0);

                    await page.render({
                        canvasContext: context,
                        viewport,
                    }).promise;

                    container.appendChild(canvas);
                }
            } catch (error) {
                if (!cancelled) {
                    setHasError(true);
                    setErrorMessage(error instanceof Error ? error.message : "Unknown PDF render error");
                }
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        };

        renderPdf();

        return () => {
            cancelled = true;
            loadingTask?.destroy?.();
        };
    }, []);

    return (
        <div className="max-h-screen overflow-y-auto relative bg-transparent p-4 pb-24 md:pb-10 md:pr-20">
            <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-3 items-end">
                <a
                    href="https://www.speedtest.net/result/19322749128" // Replace with your actual speedtest result URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white shadow-lg border border-gray-100 rounded-3xl px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <FaTachometerAlt className="text-blue-500" /> Speedtest
                </a>
                <a
                    href="https://www.speedtypingonline.com/myResults.php?r=556779704879160&d=934117415518392" // Replace with your actual typing speed result URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white shadow-lg border border-gray-100 rounded-3xl px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <FaKeyboard className="text-green-500" /> Typing Speed
                </a>
                <a
                    href={RESUME_PDF_PATH}
                    download="Emmanuel_Dabandan_Resume.pdf"
                    className="bg-white shadow-lg border border-gray-100 rounded-3xl px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <FaFileDownload className="text-red-500" /> Download PDF
                </a>
            </div>

            {isLoading && <p className="text-center text-black/70 py-6">Loading resume...</p>}

            {hasError && (
                <div className="text-center py-6">
                    <p className="text-red-700">Could not render PDF preview.</p>
                    {errorMessage && <p className="text-red-700/80 text-sm mt-2">{errorMessage}</p>}
                    <a href={RESUME_PDF_PATH} target="_blank" rel="noopener noreferrer" className="underline">
                        Open PDF in new tab
                    </a>
                </div>
            )}

            <div ref={pagesContainerRef} className="mx-auto max-w-[950px] space-y-4 sm:pt-0 pt-20" />
        </div>
    );
};

export default Resume;
