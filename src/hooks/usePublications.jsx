// src/hooks/usePublications.js
import { useEffect, useState } from "react";
import { supabase } from "../client/supabaseClient";

export default function usePublications() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("publications")
        .select("*")
        .order("year", { ascending: false }) // latest year first
        .order("created_at", { ascending: false }); // latest paper first inside year
      if (error) console.error(error);
      else setPublications(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { publications, loading };
}
