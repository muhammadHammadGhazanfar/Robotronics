import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
<<<<<<< HEAD
    outDir: 'build', // Change the output directory to 'build'
  },
})

0
=======
    outDir: "build", // Set the output directory to 'build' instead of 'dist'
  },
});
>>>>>>> 91cad78a0553868a7ef90179558702cea3fca7f2
