export function useCountDown(countDownTime: number) {
  const time = toRef(countDownTime)
  const { pause, resume, isActive } = useIntervalFn(
    () => {
      time.value--
      if (time.value <= 0)
        pause()
    },
    1000,
    { immediate: false },
  )

  const startTime = () => {
    resume()
    time.value = countDownTime
  }

  return {
    time,
    isActive,
    pause,
    startTime,
  }
}
