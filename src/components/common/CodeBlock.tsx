import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { useEffect, useRef } from "react";
import "highlight.js/styles/github-dark.css";

// 言語登録
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

export const CodeBlock: React.FC<{
	code: string;
	language?: string;
}> = ({ code, language = "typescript" }): React.ReactNode => {
	const codeRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (codeRef.current) {
			codeRef.current.textContent = code;
			codeRef.current.removeAttribute("data-highlighted");
			hljs.highlightElement(codeRef.current);
		}
	}, [code]);

	return (
		<pre>
			<code ref={codeRef} className={`language-${language}`} />
		</pre>
	);
};
