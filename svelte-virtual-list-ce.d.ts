declare module "svelte-virtual-list-ce" {
  import { SvelteComponent } from "svelte";

  interface VirtualListProps {
    items: Array<any>;
    height?: string | number;
    itemHeight?: number;
    start?: number;
    end?: number;
    isAtTop?: boolean;
    isAtBottom?: boolean;
    isScrollUp?: boolean;
    isScrollDown?: boolean;

    scrollToIndex?: (index: number, opts?: ScrollToOptions) => Promise<void>;
    scrollToBottom?: (opt?: object) => Promise<void>;
  }

  interface VirtualListEvents {
    scroll: CustomEvent<void>;
  }

  class VirtualList extends SvelteComponent<
    VirtualListProps,
    VirtualListEvents
  > {}

  export default VirtualList;
}
