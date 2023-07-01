declare module '*scss' {
  const content: { [className: string]: string }
  export = content
}

// necessário para que o TS entenda as extensões do scss como classe