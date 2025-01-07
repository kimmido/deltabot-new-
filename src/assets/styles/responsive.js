export const respondTo = (breakpoint) => {
    let size = '';

    switch(breakpoint) {
        case 'small':
            size = '480px';
        case 'medium':
            size = '768px';
        case 'large':
            size = '1024px';
        default: '';
    }
    
    return `@media (min-width: ${size})`;
}