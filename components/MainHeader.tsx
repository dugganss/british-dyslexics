// type HeaderProp = {
//     text: string;
// };

// export default function MainHeader ({text} : HeaderProp) {
// return (
//     <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">{text}</h2>
// );
// }
"use client";

export default function MainHeader({text}) {
    return (
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">{text}</h2>
    );
}
