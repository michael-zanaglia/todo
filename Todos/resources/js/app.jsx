import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
      },
    setup({ el, App, props }) {
        const root = createRoot(el);
        
            root.render(
                <ChakraProvider>
                    <App {...props} />
                </ChakraProvider>
            );
        
        
    },
   
});
