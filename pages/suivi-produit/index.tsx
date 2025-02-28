import React from "react";
import Layout from '../../app/components/layout/Layout';
import { SuiviProduit } from "@/suivi/components/suivi-produit/suivi-produit";

const SuiviProduitLayout = () => {
    return (
        <Layout>
            <SuiviProduit/>
        </Layout>
    );
};

export default SuiviProduitLayout;
