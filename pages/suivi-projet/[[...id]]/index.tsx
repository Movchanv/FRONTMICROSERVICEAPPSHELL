import { Stack } from "@carbon/react";
import { useRouter } from 'next/router';
import React from 'react';
import { ListeProjets } from "@/acquisition/components/liste-projets/liste-projets";
import Layout from "@/app/components/layout/Layout";
import SuiviProjet from "@/suivi/components/SuiviProjet";

const SuiviProjetLayout = () => {
    const router = useRouter();

    return (
        <Layout>
            <Stack gap={8}>
                <ListeProjets />
                {router.query.id && <SuiviProjet/>}
            </Stack>
        </Layout>
    );
};

export default SuiviProjetLayout;
