import { Column, Grid } from '@carbon/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FormulaireCreationProjet } from "@/acquisition/components/formulaire-creation-projet/formulaire-creation-projet";
import Layout from "@/app/components/layout/Layout";

const CreationProjet = () => {
    const router = useRouter();

    const handleSuccessSubmit = async () => {
        router.push('/suivi-projet');
    };

    return (
        <Layout>
            <Grid>
                <Column span={4}/>
                <Column span={8}>
                    <FormulaireCreationProjet onSuccessSubmit={handleSuccessSubmit} />
                </Column>
                <Column span={4}/>
            </Grid>
        </Layout>
    );
};

export default CreationProjet;
