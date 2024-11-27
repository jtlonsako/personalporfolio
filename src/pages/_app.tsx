import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath} // Use the route as the key to trigger animations
          initial={{ opacity: 0 }} // Initial state when the component mounts
          animate={{ opacity: 1 }} // Final state when the component is fully visible
          exit={{ opacity: 0 }} // State when the component unmounts
          transition={{ duration: 0.3 }} // Animation duration
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}