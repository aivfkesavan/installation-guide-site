import { create } from 'zustand';

type state = {
  selected: string
}

type actions = {
  update: (v: Partial<state>) => void
}

const useMiscStore = create<state & actions>(
  set => ({
    selected: "Windows",
    update: payload => set({ ...payload }),
  })
)

export default useMiscStore
