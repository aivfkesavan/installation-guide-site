import { create } from 'zustand';

type state = {
  tab: "Desktop" | "Mobile"
  selected: string
}

type actions = {
  update: (v: Partial<state>) => void
}

const useMiscStore = create<state & actions>(
  set => ({
    tab: "Desktop",
    selected: "Windows",
    update: payload => set({ ...payload }),
  })
)

export default useMiscStore
