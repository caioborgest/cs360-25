export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      clients: {
        Row: {
          cac: number
          company: string | null
          created_at: string
          email: string
          id: string
          last_interaction: string | null
          ltv: number
          mrr: number
          name: string
          nps_category: string | null
          nps_score: number | null
          phone: string | null
          risk_score: number
          status: string
          tier: string
          updated_at: string
          user_id: string
        }
        Insert: {
          cac?: number
          company?: string | null
          created_at?: string
          email: string
          id?: string
          last_interaction?: string | null
          ltv?: number
          mrr?: number
          name: string
          nps_category?: string | null
          nps_score?: number | null
          phone?: string | null
          risk_score?: number
          status: string
          tier: string
          updated_at?: string
          user_id: string
        }
        Update: {
          cac?: number
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          last_interaction?: string | null
          ltv?: number
          mrr?: number
          name?: string
          nps_category?: string | null
          nps_score?: number | null
          phone?: string | null
          risk_score?: number
          status?: string
          tier?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      contracts: {
        Row: {
          client_id: string
          contract_number: string
          created_at: string
          end_date: string
          id: string
          renewal_status: string
          services: Json | null
          start_date: string
          status: string
          updated_at: string
          user_id: string
          value: number
        }
        Insert: {
          client_id: string
          contract_number: string
          created_at?: string
          end_date: string
          id?: string
          renewal_status: string
          services?: Json | null
          start_date: string
          status: string
          updated_at?: string
          user_id: string
          value: number
        }
        Update: {
          client_id?: string
          contract_number?: string
          created_at?: string
          end_date?: string
          id?: string
          renewal_status?: string
          services?: Json | null
          start_date?: string
          status?: string
          updated_at?: string
          user_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "contracts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      goals: {
        Row: {
          category: string
          created_at: string
          current: number
          deadline: string
          description: string | null
          id: string
          priority: string
          status: string
          target: number
          title: string
          unit: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          current?: number
          deadline: string
          description?: string | null
          id?: string
          priority: string
          status: string
          target: number
          title: string
          unit: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          current?: number
          deadline?: string
          description?: string | null
          id?: string
          priority?: string
          status?: string
          target?: number
          title?: string
          unit?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          ai_credits: number | null
          ai_credits_used: number | null
          company_name: string | null
          created_at: string
          full_name: string | null
          id: string
          plan_type: string | null
          updated_at: string
        }
        Insert: {
          ai_credits?: number | null
          ai_credits_used?: number | null
          company_name?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          plan_type?: string | null
          updated_at?: string
        }
        Update: {
          ai_credits?: number | null
          ai_credits_used?: number | null
          company_name?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          plan_type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          active: boolean
          category: string
          created_at: string
          description: string | null
          id: string
          name: string
          price: number
          updated_at: string
          user_id: string
        }
        Insert: {
          active?: boolean
          category: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          price: number
          updated_at?: string
          user_id: string
        }
        Update: {
          active?: boolean
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          price?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
