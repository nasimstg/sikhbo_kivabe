import Link from 'next/link'
import { useEffect } from 'react'

export default function Prompt() {
    useEffect(() => {
        const elm = document.getElementById('prompt')
        let loc = localStorage.getItem("Accepted");
        if (!loc) {
            localStorage.setItem("Accepted", "False");
        }
        if (loc == 'True') {
            elm.style.display = 'none'
        }
        let timerId = setTimeout(() => {
            elm.style.display = 'none'
        }, 10000);
        return () => clearTimeout(timerId)
    }, [])
    return (
        <div id='prompt' style={{
            position: 'fixed',
            bottom: '0',
            width: '100%',
            backgroundColor: '#0d0d0d',
            textAlign: 'center',
            minHeight: '100px'
        }}>
            This website uses Google Analytics and Google Adsense and Giscus. Please read our
            <br />
            <Link href="/terms-and-conditions"> Terms and Conditions</Link> and <Link href="/privacy-policies"> Privacy Policies</Link>
            <br />
            <button style={{
                backgroundColor: 'green',
                padding: '3px 15px',
                borderRadius: '3px'
            }}
                onClick={() => {
                    const elm = document.getElementById('prompt')
                    localStorage.setItem("Accepted", "True");
                    elm.style.display = 'none'
                }}
            >Accept</button>
        </div>
    )
}
