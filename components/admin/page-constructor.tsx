"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, ArrowUp, ArrowDown } from "lucide-react";

export type Section = {
  id: string;
  type: "hero" | "text" | "features" | "cta";
  data: any;
};

export function PageConstructor({ name = "content" }: { name?: string }) {
  const [sections, setSections] = useState<Section[]>([]);

  const addSection = (type: Section["type"]) => {
    setSections([
      ...sections,
      { id: crypto.randomUUID(), type, data: {} }
    ]);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const updateSection = (id: string, data: any) => {
    setSections(sections.map(s => s.id === id ? { ...s, data: { ...s.data, ...data } } : s));
  };

  const moveSection = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === sections.length - 1) return;
    
    const newSections = [...sections];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
    setSections(newSections);
  };

  return (
    <div className="space-y-4 border-2 border-dashed border-primary/20 rounded-xl p-6 bg-gradient-to-br from-muted/30 to-muted/10 shadow-inner">
      <input type="hidden" name={name} value={JSON.stringify(sections)} />
      
      <div className="flex justify-between items-center pb-3 border-b border-border/30">
        <div>
          <h3 className="text-lg font-semibold">Page Sections</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Build your page with customizable sections</p>
        </div>
        <Select onValueChange={(v) => addSection(v as any)}>
          <SelectTrigger className="w-[200px] shadow-md">
            <SelectValue placeholder="➕ Add Section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hero">Hero Section</SelectItem>
            <SelectItem value="text">Text Block</SelectItem>
            <SelectItem value="features">Features List</SelectItem>
            <SelectItem value="cta">Call to Action</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <Card key={section.id} className="relative glass-card hover:shadow-xl transition-all border-border/50">
            <div className="absolute right-2 top-2 flex gap-1 z-10">
              <Button type="button" variant="ghost" size="icon" onClick={() => moveSection(index, "up")} disabled={index === 0}>
                <ArrowUp className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" onClick={() => moveSection(index, "down")} disabled={index === sections.length - 1}>
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button type="button" variant="destructive" size="icon" onClick={() => removeSection(section.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-sm uppercase text-muted-foreground">{section.type}</CardTitle>
            </CardHeader>
            
            <CardContent>
              {section.type === "hero" && (
                <div className="space-y-2">
                  <Input placeholder="Title" value={section.data.title || ""} onChange={e => updateSection(section.id, { title: e.target.value })} />
                  <Input placeholder="Subtitle" value={section.data.subtitle || ""} onChange={e => updateSection(section.id, { subtitle: e.target.value })} />
                </div>
              )}
              
              {section.type === "text" && (
                <Textarea placeholder="Markdown Content" value={section.data.content || ""} onChange={e => updateSection(section.id, { content: e.target.value })} />
              )}
              
              {section.type === "features" && (
                <Textarea placeholder="Features (one per line)" value={section.data.items || ""} onChange={e => updateSection(section.id, { items: e.target.value })} />
              )}

              {section.type === "cta" && (
                <div className="space-y-2">
                  <Input placeholder="Title" value={section.data.title || ""} onChange={e => updateSection(section.id, { title: e.target.value })} />
                  <Input placeholder="Button Text" value={section.data.buttonText || ""} onChange={e => updateSection(section.id, { buttonText: e.target.value })} />
                  <Input placeholder="Button Link" value={section.data.buttonLink || ""} onChange={e => updateSection(section.id, { buttonLink: e.target.value })} />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
        
        {sections.length === 0 && (
          <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors">
            <div className="text-4xl mb-3">📄</div>
            <p className="font-medium">No sections added yet</p>
            <p className="text-sm mt-1">Click "Add Section" above to start building your page</p>
          </div>
        )}
      </div>
    </div>
  );
}
