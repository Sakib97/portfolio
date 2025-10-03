import { useEffect, useState } from "react";
import { supabase } from "../client/supabaseClient";

export const useResearchProjects = () => {
    const [researchProjects, setResearchProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from("research_projects")
                .select("*")
                .order("created_at", { ascending: false }); // latest paper first inside year
            if (error) console.error(error);
            else setResearchProjects(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    return { researchProjects, loading };
}

export const useSEProjects = () => {
    const [seProjects, setSEProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from("se_projects")
                .select("*")
                .order("created_at", { ascending: false }); // latest paper first inside year
            if (error) console.error(error);
            else setSEProjects(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    return { seProjects, loading };
}